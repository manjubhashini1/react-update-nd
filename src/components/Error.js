import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log("Error", err);
    return (
        <div className="flex flex-col items-center justify-center align-middle h-screen bg-red-400 text-white text-3xl">
            <h1>OOPS!! Something went wrong!! Please try again later.</h1>
            <h3>{err.status}: {err.statusText}</h3>
            <h3>{err.error?.message}</h3>
        </div>
    )
}

export default Error;