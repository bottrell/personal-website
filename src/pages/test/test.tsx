import React from "react";

export default function Test() {

    async function getServerSideProps({ data }) {

        const allDataBaseData: String = "";
        return {
            props: {
                data: { id: 1, name: "mango" }
            }
        }
    }
    return (
        <h1 className="text-3xl font-bold">
            data
        </h1>
    );
}