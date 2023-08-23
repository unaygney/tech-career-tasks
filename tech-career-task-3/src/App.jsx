import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleOperation = (operation) => {
    if (num1 === '' || num2 === '') {
      setResult('Lütfen her iki sayıyı da girin.');
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operation) {
      case 'add':
        setResult(`Sonuç: ${n1 + n2}`);
        break;
      case 'subtract':
        setResult(`Sonuç: ${n1 - n2}`);
        break;
      case 'multiply':
        setResult(`Sonuç: ${n1 * n2}`);
        break;
      case 'divide':
        if (n2 === 0) {
          setResult("Bir sayıyı 0'a bölemezsiniz.");
        } else {
          setResult(`Sonuç: ${n1 / n2}`);
        }
        break;
      default:
        setResult('');
    }
  };

  return (
    <>
 <div className='calc'>
      <h2>Hesap Makinesi</h2>
      <input
        type="number"
        placeholder="Birinci sayıyı girin"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="İkinci sayıyı girin"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div>
        <button onClick={() => handleOperation('add')}>Topla</button>
        <button onClick={() => handleOperation('subtract')}>Çıkar</button>
        <button onClick={() => handleOperation('multiply')}>Çarp</button>
        <button onClick={() => handleOperation('divide')}>Böl</button>
      </div>
      <p>{result}</p>
    </div>
    </>
  )
}

export default App
