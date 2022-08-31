import { useAppContext } from "../store/store"

import { Link } from "react-router-dom";
import Layout from "../components/layout";

export default function Index(){
    
    const store = useAppContext();
    
    return <Layout>
        <Link to='/create'>Create</Link>
        {store.items.map(item => <div>{item.title}</div>)}
    </Layout>
}