# 03 - Konsep ReactJS

## Tujuan Pembelajaran

1. Mahasiswa paham dengan konsep ReactJS dan membuat project menggunakan ReactJS 



*** Instalasi ***

![](img/1.png)

### Praktikum 1 : Embedding Expression di JSX

Masukan Code Berikut Lalu run npm start

    const nimNama = 'NIM - Nama';
    const element = <h1>Hello, {nimNama}</h1>;

    ReactDOM.render(
    element,
    document.getElementById('root')
    );

![](img/run1.png)

<br>

Kemudian Coba

    function formatNama (user) {
    return user.nim + ' - ' + user.nama;
    }

    const user = {
    nim: '1941723007',
    nama: 'Agus SaliM H'
    };

    const element = (
    <h1>
        Halo, {formatNama(user)}!
    </h1>
    );

    ReactDOM.render(
    element,
    document.getElementById('root')
    );

![](img/run2.png)

<br>

Menambah Element pada index.js

    const element = <h1>Hello, world</h1>;

![](img/run3.png)

<br>


Rendering Element ke dalam DOM

    <div id="root"></div>
    const element = <h1>"Hello, world"</h1>;
    ReactDOM.render(element, document.getElementById('root'));

![](img/run4.png)

<br>

### Praktikum 2 : Melakukan Update Render Element

Update Render Element

    function jam() {
    const element = (
        <div>
        <h1>Sekarang Jam:</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
    }

    setInterval(jam, 1000);


![](img/run5.png)

<br>

### Praktikum 3: Rendering Sebuah Component


 memanggil component Kartu dengan data props

    function Kartu(props) {
    return <h1>Halo, {props.nim} - {props.nama}</h1>;
    }

    const element = <Kartu nama="Agus Salim H" nim="1941723007" />;

    ReactDOM.render(
    element,
    document.getElementById('root')
    );

![](img/run6.png)

<br>

### Praktikum 4: Menggabungkan beberapa Components


Memanggil apps.js 

    function Kartu (props) {
    return <h1>Halo, {props.nim} - {props.nama}</h1>;
    }

    function App() {
    return (
        <div>
        <Kartu nim="123" nama="Nama1" />
        <Kartu nim="456" nama="Nama2" />
        <Kartu nim="789" nama="Nama3" />
        </div>
    );
    }

    export default App;

![](img/run7.png)

<br>

### Praktikum 5: Melakukan ekstraksi components

Melakukan ekstrasi

    function Komentar(props) {
    return (
        <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
            />
            <div className="UserInfo-name">
            {props.author.name}
            </div>
        </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {props.date}
        </div>
        </div>
    );
    }

    function App() {
    let me = {name:"Nama Anda", avatarUrl:logo}
    return (
        <div>
        <Komentar text="isi komentar dan NIM Anda" date="20 Februari 2021" author={me} />
        </div>
    );
    }

    export default App;

![](img/run8.png)

<br>


State dan Lifecycle

    function Jam(props) {
    return (
        <div>
        <h2>Sekarang jam: {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }

    function tick() {
    ReactDOM.render(
        <Jam date={new Date()} />,
        document.getElementById('root')
    );
    }

    setInterval(tick, 1000);

![](img/run9.png)

<br>

### Praktikum 6: Mengubah function menjadi class

    class Jam extends React.Component {
    render() {
        return (
        <div>
            <h1>Halo, 1941723007 - Agus Salim H</h1>
            <h2>Sekarang jam: {this.props.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
    }

Code di atas kosong karena belum di panggil dom

        ReactDOM.render(
        <Jam />,
        document.getElementById('root')
        );
    
Setelah ditambahkan DOM maka akan keluar output sebagai berikut 

![](img/run10.png)

<br>

Menambahkan method lifecycle ke class

    class Jam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
        () => this.tick(),
        1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }
    render() {
        return (
        <div>
            <h1>Halo, 1941723007 - Agus Salim H</h1>
            <h2>Sekarang jam: {this.state.date.toLocaleTimeString()}</h2>
        </div>
        );
    }
    }
    ReactDOM.render(
    <Jam />,
    document.getElementById('root')
    );

![](img/run11.png)

<br>