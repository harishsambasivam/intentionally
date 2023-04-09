import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { MobileKeyboardContext } from "../context/MobileKeyboardContext";

function CustomInput({ label, className, placeHolder, ...props }: any) {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={props.id || props.name} className="text-lg">
        {label}
      </label>
      <Field
        {...props}
        className={`appearance-none  rounded w-full py-2 text-primary-600 leading-tight focus:outline-none focus:shadow-outline ${
          props.errors && props.touched ? "border-red-500" : ""
        }`}
        placeholder={placeHolder}
      />
      <ErrorMessage name={props.name} className="text-xs italic text-red-500" />
    </div>
  );
}

const TextArea = function ({ label, className, placeHolder, ...props }: any) {
  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={props.id || props.name} className="text-lg">
        {label}
      </label>
      <Field
        {...props}
        as="textarea"
        className={`appearance-none h-full rounded w-full py-2 text-primary-600 leading-tight focus:outline-none focus:shadow-outline ${
          props.errors && props.touched ? "border-red-500" : ""
        }`}
        placeholder={placeHolder}
      />
      <ErrorMessage name={props.name} className="text-xs italic text-red-500" />
    </div>
  );
};

const Intention = () => {
  const { setIsKeyboardShownOnMobile }: any = useContext(MobileKeyboardContext);

  const handleFocus = () => {
    setIsKeyboardShownOnMobile(true);
  };

  return (
    <Formik
      initialValues={{ title: "", story: "" }}
      onSubmit={(values: any) => console.log(values)}
    >
      {({ errors, touched, setFieldValue }: any) => (
        <Form>
          <CustomInput
            label="Title"
            name="title"
            type="text"
            className="mb-6"
            errors={errors.title}
            touched={touched.title}
            onFocus={handleFocus}
            placeHolder="Add a title to this entry"
          />
          <TextArea
            label="Story"
            name="story"
            type="textarea"
            className="h-full mb-6"
            errors={errors.story}
            touched={touched.story}
            placeHolder="Write something..."
            onChange={(event: any) => {
              setFieldValue("story", event.target.value);
              event.target.style.height = "auto";
              event.target.style.height = `${event.target.scrollHeight}px`;
            }}
          />
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Intention;
