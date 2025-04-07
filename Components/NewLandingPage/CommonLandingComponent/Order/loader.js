import { Oval } from  'react-loader-spinner'
const Loader =()=>{
    return <Oval
    height={35}
    width={35}
    color="#1a3997"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel='oval-loading'
    secondaryColor="#1a3997"
    strokeWidth={5}
    strokeWidthSecondary={2}

  />
}

export default Loader