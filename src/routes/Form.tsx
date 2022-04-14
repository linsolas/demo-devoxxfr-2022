import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";

interface Props {
  onMainActionClick: () => void;
}

// interface FormValues {
//   mail: string;
//   password: string;
//   address: string;
//   city: string;
//   zip: string;
//   country: string;
// }

const FormSection = ({ onMainActionClick }: Props) => {
  // const [formValues, setFormValues] = useState<FormValues>({
  //   mail: "",
  //   password: "",
  //   address: "",
  //   city: "",
  //   zip: "",
  //   country: ""
  // });

  const validateForm = (values: any) => {
    const errors: any = {};
    if (!values.mail) {
      errors.mail = "Champ requis";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
      errors.mail = "Format invalide";
    }
    if (!values.password) {
      errors.password = "Champ requis";
    }
    return errors;
  };

  const submit = (values: any, actions: any) => {
    console.log({ values, actions });
    onMainActionClick();
  };

  return (
    <div className="card m-5">
      <div className="card-header display-6 bg-warning" style={{color: 'orange'}}>Formulaire d'inscription</div>
      <div className="card-body">
        <Formik
          initialValues={{
            mail: "", password: "", address: "", city: "", zip: "", country: ""
          }}
          validate={validateForm}
          onSubmit={submit}
        >
          {({ isSubmitting }) => (
            <Form className="flex-row-reverse row">
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <Field name="password" type="password" className="form-control" data-testid="my-password" />
                <ErrorMessage name="password" component="div" className="text-danger"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="mail" className="form-label">Email</label>
                <Field name="mail" type="email" className="form-control" placeholder="john@doe.com" data-testid="my-email" />
                <ErrorMessage name="mail" component="div" className="text-danger"/>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">Adresse</label>
                <Field name="address" type="text" className="form-control" placeholder="102 Missilfix"/>
              </div>

              <div className="col-md-4">
                <label htmlFor="country" className="form-label">Pays</label>
                <Field as="select" name="country" type="text" className="form-control" placeholder="France">
                  <option value="France">🇫🇷 France</option>
                  <option value="Europe">🇪🇺 Europe</option>
                  <option value="Ailleurs">🌏 Ailleurs</option>
                </Field>
              </div>
              <div className="col-md-2">
                <label htmlFor="zip" className="form-label">Code postal</label>
                <Field name="zip" type="text" className="form-control" placeholder="12345" />
              </div>
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">Ville</label>
                <Field name="city" type="text" className="form-control" placeholder="🗽 Bastia" />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary float-end" disabled={isSubmitting}>
                  S'enregistrer
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const Done = ({ onMainActionClick }: Props) => (
  <div className="card m-5">
    <div className="card-header bg-success display-6 text-white">Inscription validée !</div>
    <div className="card-body">
      Merci ! ❤️
    </div>
    <div className="card-footer">
      <button className="btn btn-primary float-end" onClick={onMainActionClick}>A + dans l'🚌</button>
    </div>
  </div>
);

export const FormPage = () => {
  const [done, setDone] = useState(false);

  return done ?
    <Done onMainActionClick={() => setDone(false)}/>
    :
    <FormSection onMainActionClick={() => setDone(true)}/>;
}
