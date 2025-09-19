const Shimmer = ()=> {
    return(
        <div className="flex flex-wrap">
            {Array(10).fill("").map((e,index)=>(
                <div className="shimmer-card w-[400px] h-[350px] border-black border-1 p-2 rounded-lg m-4" key={index}>
                    <span className="shimmer-image w-full h-48 bg-gray-300 rounded-lg mb-4 block"></span>
                    <span className="shimmer-text w-3/4 h-6 bg-gray-300 rounded mb-2 block"></span>
                    <span className="shimmer-text w-1/2 h-6 bg-gray-300 rounded mb-2 block"></span>
                    <span className="shimmer-text w-full h-6 bg-gray-300 rounded mb-2 block"></span>
                    <span className="shimmer-text w-5/6 h-6 bg-gray-300 rounded mb-2 block"></span>
                </div>
            ))}
        </div>
    );
}

export default Shimmer;