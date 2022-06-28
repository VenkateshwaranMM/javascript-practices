import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

const App = () => {
  const [state, setState] = useState({
    data: [],
    name: "Venkatesh"
  });
  useEffect(async () => {
    // async await way
    const newUserData = await getMyData();
    setState({
      name: newUserData.title
    });
    console.log("newUserData =============>", newUserData);
    // Promise way
    // getUserData()
    // .then((val) => {
    //   console.log("Final result ===========>", val);
    // });
  }, []);

  const getMyData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log());
  };

  const getUserData = () => {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return (
    <View>
      <Text>{state.name}</Text>
    </View>
  );
};

export default App;
