import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskFormik = ({ add, length }) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }


  const initialValues = {
    taskName: "",
    description: "",
    completed: "",
    level: LEVELS.NORMAL,
  };

  const registerSchema = Yup.object().shape({
    taskName: Yup.string().required("Task name is required"),
    description: Yup.string().required("Task name is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          touched,
          errors,

        }) => (
          <Form
            onSubmit={addTask}
            className="d-flex justify-content-center align-items-center mb-4"
          >
            <div className="form-outline flex-fill">
              <Field
                innerRef={nameRef}
                id="taskname"
                type="text"
                name="taskname"
                placeholder="Task name"
                className="form-control form-control-lg"
                required
                autoFocus
              />

              {errors.taskName && touched.taskName && (
                <ErrorMessage name="taskname" component="div"></ErrorMessage>
              )}

              <Field
              innerRef={descriptionRef}
                id="description"
                type="text"
                name="description"
                placeholder="Task description"
                className='form-control form-control-lg' required
              />

              {errors.description && touched.description && (
                <ErrorMessage name="description" component="div"></ErrorMessage>
              )}

              <Field as="select" name="level" className='form-control form-control-lg' innerRef={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
             <option value={LEVELS.NORMAL}>Normal</option>
             <option value={LEVELS.URGENT}>Urgent</option>
             <option value={LEVELS.BLOCKING}>Blocking</option>
           </Field>

              <button type="submit" className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Add New Task' : 'Create your First Task'}</button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
