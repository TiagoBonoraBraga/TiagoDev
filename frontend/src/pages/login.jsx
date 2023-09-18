import CustomLabel from "@/components/atoms/CustomLabel";
import CustomButton from "@/components/atoms/CustomButton";

export default function Login() {
  return (
    <>

        <div
          class="flex flex-col items-center justify-center pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl
      xl:px-5 lg:flex-row"
        >
          <div class="flex flex-col items-center justity-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
            {/* <div class="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
              <div class="flex flex-col items-center justify-center w-full h-full relative lg:pr-10"> */}
                {/* <img src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png" class="btn-"/> */}
              {/* </div>
            </div> */}
            <div class="flex justify-center items-center w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
              <div
                class="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10"
              >
                <h1 class="w-full text-4xl font-bold text-blue-200 text-center leading-snug font-serif">
                  Tiago Dev - Login   
                </h1>
                <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div class="relative">
                    <CustomLabel
                      title={"Email:"}
                      class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    />
                    <input
                      className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      id="email"
                      //   value={email}
                      //   onChange={(e) => {
                      //     setEmail(e.target.value);
                      //   }}
                    />
                  </div>
                  <div class="relative">
                    <CustomLabel
                      title={"Password:"}
                      class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute"
                    />
                    <input
                      className="shadow-md appearance-none border rounded border-blue-200 w-full py-2 px-3 text-blue-200 leading-tight focus:outline-none focus:shadow-outline"
                      type="password"
                      id="password"
                      //   value={email}
                      //   onChange={(e) => {
                      //     setEmail(e.target.value);
                      //   }}
                    />
                  </div>
                  <div class="relative">
                  <button className="w-full bg-blue-300 text-white-500 mt-5  p-2 rounded hover:bg-blue-500  hover:text-white-500 ">Login</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
