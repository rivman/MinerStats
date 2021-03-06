/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package za.co.terratech.minerstats;

import com.google.gson.Gson;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Web application lifecycle listener.
 *
 * @author riazs
 */
public class ContextListener implements ServletContextListener {

    private static Config config;
    private static final Map<String, MinerEquirer> MINERS = new HashMap();
    private static NicehashEnquirer nhEnquirer;

    public static Config getConfig() {
        return config;
    }

    public static Map<String, MinerEquirer> getMINERS() {
        return MINERS;
    }

    ExecutorService executor = Executors.newCachedThreadPool();
    ExecutorService nhExecutor = Executors.newSingleThreadExecutor();
    

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        try {
            String base = System.getProperty("jboss.server.config.dir");
            File file = new File(base + "\\config.json");
            String json = new String(Files.readAllBytes(Paths.get(file.toURI())));
            Gson gson = new Gson();
            config = gson.fromJson(json, Config.class);
            for (Miner miner : config.getMiners()) {
                MinerEquirer enquirer = new MinerEquirer(miner.getId(), miner.getHost(), miner.getPort(), miner.getName());
                ContextListener.getMINERS().put(miner.getName(), enquirer);
                executor.execute(enquirer);
            }
            nhEnquirer = new NicehashEnquirer(config.getBtcAddress());
            nhExecutor.execute(nhEnquirer);
        } catch (FileNotFoundException ex) {
            Logger.getLogger(ContextListener.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(ContextListener.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static NicehashEnquirer getNhEnquirer() {
        return nhEnquirer;
    }
    
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        for(MinerEquirer enquirer : getMINERS().values()){
            enquirer.interrupt();
        }
        nhEnquirer.interrupt();
        executor.shutdownNow();
        nhExecutor.shutdownNow();
    }
}
