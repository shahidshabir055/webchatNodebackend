import {addNewContact, getContacts, getContact, updateContact, deleteContact} from '../services/crmServices';
const routes = (app) => {
    app.route('/contact')
    .get((req,res, next)=>{
        //middleware
        next();
    }, getContacts)
    .post(addNewContact)
    app.route('/contact/:contactId')
    .get(getContact)
    app.route('/contact/:contactId')
    .put(updateContact)
    .delete(deleteContact)
}
export default routes;