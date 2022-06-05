import Edit from './conponents/Edit'
import List from './conponents/List'
import './index.css';

const Home = () => {
    return <div className="app">
        <Edit />
        <List />
    </div>
}

// const app = {
//     color:'red'
// }

// const Home = () => {
//     return <div style={app}>
//         <Edit />
//         <List />
//     </div>
// }

export default Home