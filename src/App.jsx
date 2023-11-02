import { useState } from "react";

function App() {
  const initialState = ["apple", "banana", "cherry", "date", "elderberry"];
  const [array, setArray] = useState(initialState);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");

  const handleForEach = function () {
    let temp = "";
    array.forEach(function (item, index) {
      temp += `${index} : ${item} / `;
    });
    setResult(temp);
  };

  const handleFilter = function () {
    const filtered = array.filter((item, index) => item.includes(query));

    setResult(filtered.join(", "));
  };

  const handleMap = function () {
    const mapped = array.map(function (item, index) {
      return item.toUpperCase();
    });

    setResult(mapped.join(", "));
  };

  const handleReduce = function () {
    const reduced = array.reduce(function (acc, cur) {
      return `${acc} + ${cur}`;
    });
    setResult(reduced);
  };

  const handlePush = function () {
    if (query.length <= 0) {
      alert("추가하려는 값을 입력해주세요.");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handlePop = function () {
    const newArr = [...array];
    newArr.pop();

    setArray(newArr);
    setResult(newArr.join(", "));
  };

  const handleSlice = function () {
    const newArr = [...array];

    setArray(newArr);
    setResult(newArr.slice(1, 4).join(", "));
  };

  const handleSplice = function () {
    let newArr = [...array];
    newArr.splice(2, 2, 'lime', 'peach');

    setResult(newArr.join(", "));
  };

  const handleIndexof = function () {
    const newArr = [...array];

    setArray(newArr);
    setResult(newArr.indexOf(query));
  };

  const handleIncludes = function () {
    let newArr = [...array];

    function result() {
      if (newArr.includes(query)) {
        return 'true';
      } else {
        return 'false';
      }
    }
    setResult(result);
  };

  const handleFind = function () {
    const finded = array.find((item, index) => item.includes(query));

    setResult(finded);
  };

  const handleSome = function () {
   
  }

  const handleEvery = function () {

  }

  const handleSort = function () {
    let newArr = [...array];
    newArr.sort();

    setResult(newArr.join(", "));
  }

  const handleJoin = function () {
    let newArr = [...array];
    newArr.join();

    setResult(newArr.join(", "));
  }

  return (
    <div>
      <h1>Standard반 배열 API 테스트</h1>
      <input
        value={query}
        onChange={function (e) {
          setQuery(e.target.value);
        }}
      />

      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>reduce</button>
        <button onClick={handlePush}>push</button>
        <button onClick={handlePop}>pop</button>
        <button onClick={handleSlice}>slice</button>
        <button onClick={handleSplice}>splice</button>
        <button onClick={handleIndexof}>indexOf</button>
        <button onClick={handleIncludes}>includes</button>
        <button onClick={handleFind}>find</button>
        <button onClick={handleSome}>some</button>
        <button onClick={handleEvery}>every</button>
        <button onClick={handleSort}>sort</button>
        <button onClick={handleJoin}>join</button>
      </div>

      <div>
        <h3>원본배열</h3>
        <p>{array.join(", ")}</p>
      </div>
      <div>
        <h3>결과물</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
