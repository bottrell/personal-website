import db from '../../../lib/firebase';
import { doc, getDoc } from "firebase/firestore";

export default function Test(props: any) {
    const propData: Map<string, string> = props.data;
    return (
        <h1 className="text-3xl font-bold">
            {/* {...Object.keys(props.data).map(item =>{
                return <li></li>;
            })} */
                <ul>
                propData.forEach(item => <li>{item}</li>;
                    )

            }
                </ul>

        </h1>
    );
}

export async function getServerSideProps() {
    // ! https://firebase.google.com/docs/firestore/query-data/get-data

    const data = querySnapshot.data;

    console.log(data);
    return {
        props: {
            data: data
        }
    }
}

