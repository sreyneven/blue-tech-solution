
const Modal_Demo = ({isVisible , onClose  , request_demo_video}:{isVisible:any ,onClose :any ,request_demo_video:any }) => {
    if(!isVisible) return null;
     
    const handleClose = (e:any) => {
        if(e.target.id === "modal") onClose() ;
    }
    return (
        <div className="fixed inset-0 z-50 bg-opacity-25 bg-black backdrop-blur-sm flex justify-center items-center" id="modal" onClick={handleClose}>
            <div className="lg:w-[600px] flex flex-col ">
                <button className="text-white place-self-end" onClick={()=>onClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-x-lg pb-2" viewBox="0 0 16 16">
                         <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </button>
                <div  className="bg-white p-1 rounded video" dangerouslySetInnerHTML={{__html:request_demo_video}}></div>

            </div>
        </div>
    );
};

export default Modal_Demo;