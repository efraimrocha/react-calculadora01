import Input from './components/Input'; // Importa o componente de entrada (campo de exibição).
import Button from './components/Button'; // Importa o componente de botão.
import { Container, Content, Row } from './styles'; // Importa componentes estilizados para estruturar a interface.
import { useState } from 'react'; // Importa o hook useState do React para gerenciar o estado do componente.

const App = () => {
  // Define o estado inicial para o número atual exibido.
  const [currentNumber, setCurrentNumber] = useState('0');
  
  // Define o estado inicial para o primeiro número em uma operação.
  const [firstNumber, setFirstNumber] = useState('0');
  
  // Define o estado inicial para a operação escolhida (soma, subtração, etc.).
  const [operation, setOperation] = useState('');

  // Função que limpa os valores atuais e reseta o estado da calculadora.
  const handleOnClear = () => {
    setCurrentNumber('0');  // Reseta o número atual para '0'.
    setFirstNumber('0');    // Reseta o primeiro número para '0'.
    setOperation('');       // Reseta a operação para uma string vazia.
  };

  // Função que adiciona um número ao final do número atual exibido.
  const handleAddNumber = (num) => {
    // Atualiza o número atual concatenando o novo número, substituindo o '0' inicial se necessário.
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  // Função que adiciona um ponto decimal ao número atual, se ele ainda não tiver um.
  const handleAddDecimal = () => {
    // Verifica se o número atual já contém um ponto; se não, adiciona.
    if (!currentNumber.includes('.')) {
      setCurrentNumber((prev) => `${prev}.`);
    }
  };

  // Função que realiza a operação de soma.
  const handleSumNumbers = () => {
    // Verifica se o primeiro número ainda não foi definido.
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));  // Define o primeiro número como o número atual.
      setCurrentNumber('0');  // Reseta o número atual para '0'.
      setOperation('+');  // Define a operação para soma.
    } else {
      // Caso o primeiro número já esteja definido, realiza a soma.
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));  // Atualiza o número atual com o resultado da soma.
      setOperation('');  // Reseta a operação para uma string vazia.
    }
  };

  // Função que realiza a operação de subtração.
  const handleMinusNumbers = () => {
    // Verifica se o primeiro número ainda não foi definido.
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));  // Define o primeiro número como o número atual.
      setCurrentNumber('0');  // Reseta o número atual para '0'.
      setOperation('-');  // Define a operação para subtração.
    } else {
      // Caso o primeiro número já esteja definido, realiza a subtração.
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));  // Atualiza o número atual com o resultado da subtração.
      setOperation('');  // Reseta a operação para uma string vazia.
    }
  };

  // Função que realiza a operação de multiplicação.
  const handleMultNumbers = () => {
    // Verifica se o primeiro número ainda não foi definido.
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));  // Define o primeiro número como o número atual.
      setCurrentNumber('0');  // Reseta o número atual para '0'.
      setOperation('x');  // Define a operação para multiplicação.
    } else {
      // Caso o primeiro número já esteja definido, realiza a multiplicação.
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));  // Atualiza o número atual com o resultado da multiplicação.
      setOperation('');  // Reseta a operação para uma string vazia.
    }
  };

  // Função que realiza a operação de divisão.
  const handleDivNumbers = () => {
    // Verifica se o primeiro número ainda não foi definido.
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));  // Define o primeiro número como o número atual.
      setCurrentNumber('0');  // Reseta o número atual para '0'.
      setOperation('/');  // Define a operação para divisão.
    } else {
      // Caso o primeiro número já esteja definido, realiza a divisão.
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));  // Atualiza o número atual com o resultado da divisão.
      setOperation('');  // Reseta a operação para uma string vazia.
    }
  };

  // Função que realiza a operação quando o botão de igual é pressionado.
  const handleEquals = () => {
    // Verifica se há um primeiro número, uma operação definida e um número atual para calcular.
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      // Realiza a operação correspondente com base no valor de 'operation'.
      switch (operation) {
        case '+':
          handleSumNumbers();  // Chama a função de soma se a operação for '+'
          break;
        case '-':
          handleMinusNumbers();  // Chama a função de subtração se a operação for '-'
          break;
        case 'x':
          handleMultNumbers();  // Chama a função de multiplicação se a operação for 'x'
          break;
        case '/':
          handleDivNumbers();  // Chama a função de divisão se a operação for '/'
          break;
        default:
          break;  // Não faz nada para outras operações.
      }
    }
  };

  // JSX retornado pelo componente para renderizar a interface da calculadora.
  return (
    <Container>
      <Content>
        {/* Componente de entrada que exibe o número atual */}
        <Input value={currentNumber} />
        
        {/* Primeira linha de botões: limpar, ponto decimal, multiplicação e divisão */}
        <Row>
          <Button label="c" onClick={handleOnClear} />  {/* Botão de limpar */}
          <Button label="." onClick={handleAddDecimal} />  {/* Botão de ponto decimal */}
          <Button label="x" onClick={handleMultNumbers} />  {/* Botão de multiplicação */}
          <Button label="/" onClick={handleDivNumbers} />  {/* Botão de divisão */}
        </Row>

        {/* Segunda linha de botões: números 7, 8, 9 e subtração */}
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />  {/* Botão de subtração */}
        </Row>

        {/* Terceira linha de botões: números 4, 5, 6 e soma */}
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />  {/* Botão de soma */}
        </Row>

        {/* Quarta linha de botões: números 1, 2, 3 e igual */}
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />  {/* Botão de igual */}
        </Row>
      </Content>
    </Container>
  );
};

export default App;
