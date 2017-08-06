
package za.co.terratech.minerstats.statsproviderex;

import java.util.ArrayList;
import java.util.List;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;
import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;

public class Past {

    @SerializedName("data")
    @Expose
    private List<List<Integer>> data = new ArrayList<List<Integer>>();
    @SerializedName("algo")
    @Expose
    private Integer algo;

    public List<List<Integer>> getData() {
        return data;
    }

    public void setData(List<List<Integer>> data) {
        this.data = data;
    }

    public Integer getAlgo() {
        return algo;
    }

    public void setAlgo(Integer algo) {
        this.algo = algo;
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    @Override
    public int hashCode() {
        return new HashCodeBuilder().append(data).append(algo).toHashCode();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if ((other instanceof Past) == false) {
            return false;
        }
        Past rhs = ((Past) other);
        return new EqualsBuilder().append(data, rhs.data).append(algo, rhs.algo).isEquals();
    }

}
