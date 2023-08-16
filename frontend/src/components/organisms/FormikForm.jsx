import { Formik } from "formik";
const FormikForm = () => {
    return ( 
        
           
                <form>
                    <div>
                        <label>Nome:</label>
                        <input name="name" type="text" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input name="name" type="email" />
                    </div>
                </form>
            
    )

}

export default Formik;