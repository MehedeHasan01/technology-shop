
const Title = ({title, subTitle}) => {
    return (
        <>
         <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-3">{title}</h1>
            <p className=" md:w-[60%] mx-auto text-center px-8 md:px-0 text-gray-600">{subTitle}</p>
        </>
    );
};

export default Title;