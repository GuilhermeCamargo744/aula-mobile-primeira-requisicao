import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Home() {
  const [valueApi, setValueApi] = useState("");
  const [loading, setLoading] = useState(false);

  const getApi = async () => {
    setLoading(true);

    setTimeout(() => {
      axios
        .get("http://localhost:3000/teste")
        .then((resp) => {
          setValueApi(resp.data);
          console.log("Pumba: ", resp.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <View>
      {loading ? <ActivityIndicator size={38} /> : <Text>{valueApi}</Text>}
    </View>
  );
}
