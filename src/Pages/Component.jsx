import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import { ComponentCard } from '../Data/ComponentCard';
import { InstallationData } from '../Data/Installation';
import AceEditor from 'react-ace';
import Background from '../Media/homeBg.mp4';


// Importing Ace Editor themes and modes
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

function Component() {
  const [installation, setInstallation] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [component,setComponent]=useState(false) ; 
  const [filterComponent,setFilterComponent]=useState([]) ; 
  const [allComponent,setAllComponent]= useState(true) ;

  // Function to filter InstallationData based on category
  const handleInstallFilter = (category) => {
    const installFilter = InstallationData.filter((item) => item.category === category);
    setFilteredData(installFilter);
  };

//filter Components section 
const handleComponentFilter=(category)=>{
  const componentFilter = ComponentCard.filter((item)=>item.category===category);
  setFilterComponent(componentFilter) ; 

}

const handleComponent=(category)=>{
  console.log(category);
  setComponent(true) ; 
  setInstallation(false);
  handleComponentFilter(category)
  setAllComponent(false) ; 
}
  
  // Function to handle installation button clicks
  const handleInstall = (category) => {
    setInstallation(true);
    setComponent(false) ; 
    handleInstallFilter(category);
    setAllComponent(false) ; 
  };

  const handleAllComponent=()=>{
    setAllComponent(true) ; 
    setInstallation(false);
    setComponent(false) ; 
    console.log(allComponent)
  }

  // Function to render installation steps and commands-Component
  const RenderInstallation = () => {
    if (installation) {
      return (
        <div className="flex flex-col items-center text-white">
          {filteredData.map((item, index) => (
            <div key={index} className="max-w-lg mx-auto p-4 rounded-lg shadow-lg my-8">
              <div className="flex flex-col items-center justify-start">
                <p className="text-4xl font-bold">Install {item.title}</p>
                <p>{item.Description}</p>
              </div>
              
              {/* Command 1 - Create a New Project */}
              <div className="mt-6">
                <p className="text-2xl text-white font-bold my-5">Create a New Project</p>
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  name={`codeEditor-create-${item.title.toLowerCase()}`}
                  value={item.Command1}
                  readOnly={true}
                  fontSize={24}
                  width="1000px"
                  height="100px"
                  showPrintMargin={false}
                  highlightActiveLine={false}
                  showGutter={true}
                  setOptions={{
                    useWorker: false,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
                  className="rounded-lg"
                />
              </div>

              {/* Additional Steps for Next.js and Tailwind */}
              {(item.title === "Next.js" || item.title === "Tailwind") && item.Command4 && (
                <div className="">
                  <p className="text-2xl text-white font-bold my-5">After Installing, go through these steps</p>
                  <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name={`codeEditor-steps-${item.title.toLowerCase()}`}
                    value={item.Command4}
                    readOnly={true}
                    fontSize={24}
                    width="1000px"
                    height="300px"  // Adjusted height for consistency
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    showGutter={true}
                    setOptions={{
                      useWorker: false,
                      showLineNumbers: false,
                      tabSize: 2,
                    }}
                    className="rounded-lg"
                  />
                </div>
              )}

            

              {/* Command 2 and Command 3 - Start your app */}
              <div className="">
                {item.title==="Tailwind"?(<p className="text-2xl text-white font-bold my-5">Add this in  globals.css</p>):(<p className="text-2xl text-white font-bold my-5">Start your app</p>)}
                <AceEditor
                  mode="javascript"
                  theme="monokai"
                  name={`codeEditor-start-${item.title.toLowerCase()}`}
                  value={`${item.Command2}\n${item.Command3}`}
                  readOnly={true}
                  fontSize={24}
                  width="1000px"
                  height="500px"
                  showPrintMargin={false}
                  highlightActiveLine={false}
                  showGutter={true}
                  setOptions={{
                    useWorker: false,
                    showLineNumbers: false,
                    tabSize: 2,
                  }}
                  className="rounded-lg"
                />
              </div>
                {/* Additional Steps for Tailwind */}
                {item.title === "Tailwind" && item.Command5 && (
                <div className="">
                    {item.title==="Tailwind"?(<p className="text-2xl text-white font-bold my-5">Start Using Tailwind CSS</p>):(<p className="text-2xl text-white font-bold my-5">Start your app</p>)}
                  <AceEditor
                    mode="javascript"
                    theme="monokai"
                    name={`codeEditor-final-${item.title.toLowerCase()}`}
                    value={item.Command5}
                    readOnly={true}
                    fontSize={24}
                    width="1010px"
                    height="300px"  // Adjusted height for consistency
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    showGutter={true}
                    setOptions={{
                      useWorker: false,
                      showLineNumbers: false,
                      tabSize: 2,
                    }}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
          
        </div>
      );
    }
    return null;
  };


  const RenderComponent = () => {
    if (component) {
      return (
        <div className="flex flex-col items-center text-white">
          {filterComponent.map((item, index) => (
            <div key={index} className="max-w-lg mx-auto p-4 rounded-lg shadow-lg my-8">
              <div className="flex flex-col items-center justify-start my-7">
                <p className="text-4xl font-bold">{item.title}</p>
                <p className='text-gray-300'>{item.Description}</p>
                <p className='text-gray-600'>{item.user_msg}</p>
              
             
              </div>
              <iframe
                src={item.iframeUrl} // 
                title={item.title} // 
                width="1000px"
                height="1000px"
                className="rounded-lg"
              
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      );
    }
    return null; // return null if component is falsy
  };
  
  

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
       <video className='absolute inset-0 w-full h-full object-cover' autoPlay loop muted>
        <source src={Background} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <NavBar />
      <div className="absolute flex items-center justify-center mt-12 w-screen">
        {/* Left Sidebar - Filter Options */}
        <div className="p-12 overflow-y-auto mt-48 h-full fixed left-0 top-0 bottom-0 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          <ul className="text-white">
            <li className="font-bold my-2">Contact</li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer"><a href='https://www.linkedin.com/in/aditya-bhattacharjee0706/' target='_blank'>LinkedIn</a></li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer"><a href='https://github.com/Adi0706' target='_blank'>GitHub</a></li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer"><a href='https://twitter.com/Acejumanji' target='_blank'>Twitter</a></li>
          </ul>
          <ul className="text-white">
            <li className="font-bold my-2">Installation</li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => handleInstall('React')}>
              Install ReactJs
            </li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => handleInstall('Next')}>
              Install NextJs
            </li>
            <li className="text-gray-400 hover:text-gray-600 cursor-pointer" onClick={() => handleInstall('Tailwind')}>
              Install Tailwind
            </li>
          </ul>
          <ul className="text-white">
            <li className="font-bold my-2"> Components</li>
            <li className='text-gray-400  hover:text-gray-600 cursor-pointer' onClick={handleAllComponent}>All Components</li>
            {ComponentCard.map((item, index) => (
            
              <li key={index} className="my-2 text-gray-400 hover:text-gray-600 cursor-pointer" onClick={()=>handleComponent(item.category)}>
                {item.category}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Content - Installation Steps */}
        <div className="w-full p-12 scroll-py-12 flex items-start justify-start overflow-y-auto h-screen scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 ml-96"> 
      {installation ? (
        <RenderInstallation />
      ) : component?(<RenderComponent/>): allComponent?(
        
        <div
          className=" p-5 rounded-lg grid grid-cols-2 gap-4"
          style={{
            backdropFilter: 'blur(10px)',
          }}
        >
        {ComponentCard.map((item, index) => (
    <div 
        key={index} 
        className="flex flex-col w-full h-96 p-5 bg-gray-400 bg-opacity-10 backdrop-blur-lg shadow-lg rounded-lg cursor-pointer"
        onClick={() => handleComponent(item.category)}
    >
        <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-60 object-contain rounded-lg " // Set fixed width and height
        />
        <p className="text-white py-2 text-2xl font-bold">{item.title}</p>
        <p className="text-white mb-2">{item.Description}</p>
    </div>
))}

        </div>
      ):(null)}
    </div>
        
      </div>
    </div>
  );
}

export default Component;
