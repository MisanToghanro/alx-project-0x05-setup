


const Home: React.FC = () => {

  const handleGenerateImage = async () => {
    console.log("Generating images...")
  }
  return(
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-sm md:text-lg text-gray-700 mb-4">Generate stunning images based on your prompts</p>

        <div className="w-full max-w-sm md:max-w-md">
          <input
           type="text"
           placeholder="Enter your prompt here..."
           className="w-full p-3 border rounded-lg mb-4 border-gray-400"
           />

           <button onClick={handleGenerateImage} className="w-full p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 hover:scale-105 cursor-pointer">Generate</button>
        </div>
      </div>
    </div>
  )
}
export default Home