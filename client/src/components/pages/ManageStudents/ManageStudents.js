
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/DeleteForever';

//vkh
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import { getCurrentProfile } from '../../../actions/profile';

const ManageStudents = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) :  (
    <Fragment>
    <div className="wrapper">
      <div className="content">
        <main className="container block">
          <section className="bg-light border-0 p-5 m-3">
            <div className="row">
              <div className="col-12">
              <h1 className="font-weight-bold">{user && user.firstName} {user && user.lastName}'s HOMEROOM <Edit color="primary"/></h1>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              {user && user.schoolName}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              {user && user.address}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
              {user && user.city}, {user && user.state} {user && user.zipcode}
              </div>
            </div>
            </section>
          
            
            <section className="bg-light border-0 p-5 m-3">
            <div className="row">
              <div className="col-12">
                <h2 className="font-weight-bold">Add Students</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-4">
                <button type="button" className="btn-primary btn-sm">
                  Add Student
                </button>
              </div>
            </div>
          </section>
          <section className="bg-light border-0 p-5 m-3">
          <div className="row">
              <div className="col-12">
                <h2 className="font-weight-bold">Classroom</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
              <h4>Bart Simpson</h4>
              </div>
              <div className="col-5">
              <h4>homer@gmail.com</h4>
              </div>
              <div className=" col-2 d-flex justify-content-end">
                <Edit color="primary"/>
                <Delete color='secondary'/>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
              <h4>Nelson Muntz</h4>
              </div>
              <div className="col-5">
              <h4>nelson@gmail.com</h4>
              </div>
              <div className=" col-2 d-flex justify-content-end">
                <Edit color="primary"/>
                <Delete color='secondary'/>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
              <h4>Lisa Simpson</h4>
              </div>
              <div className="col-5">
              <h4>homer@gmail.com</h4>
              </div>
              <div className=" col-2 d-flex justify-content-end">
                <Edit color="primary"/>
                <Delete color='secondary'/>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
              <h4>Martin Prince</h4>
              </div>
              <div className="col-5">
              <h4>Prince@gmail.com</h4>
              </div>
              <div className=" col-2 d-flex justify-content-end">
                <Edit color="primary"/>
                <Delete color='secondary'/>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
              <h4>Ralph Wiggum</h4>
              </div>
              <div className="col-5">
              <h4>wigout@gmail.com</h4>
              </div>
              <div className=" col-2 d-flex justify-content-end">
                <Edit color="primary"/>
                <Delete color='secondary'/>
              </div>
            </div>
            
           
            </section>
        </main>
      </div>
    </div>
    </Fragment>
  );
};


ManageStudents.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

//end vkh



// const ManageStudents = () => {
//   return (
//     <div className="wrapper">
//       <div className="content">
//         <main className="container block">
//           <section className="bg-light border-0 p-5 m-3">
//             <div className="row">
//               <div className="col-12">
//               <h1 className="font-weight-bold">TEACHER HOMEROOM <Edit color="primary"/></h1>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//               School Name
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//               1234 Main Street
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-12">
//               Philadelphia, PA 19103
//               </div>
//             </div>
//             </section>
          
            
//             <section className="bg-light border-0 p-5 m-3">
//             <div className="row">
//               <div className="col-12">
//                 <h2 className="font-weight-bold">Add Students</h2>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-4">
//                 <input
//                   type="name"
//                   className="form-control"
//                   id="name"
//                   placeholder="Name"
//                 />
//               </div>
//               <div className="col-4">
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Email"
//                 />
//               </div>
//               <div className="col-4">
//                 <button type="button" className="btn-primary btn-sm">
//                   Add Student
//                 </button>
//               </div>
//             </div>
//           </section>
//           <section className="bg-light border-0 p-5 m-3">
//           <div className="row">
//               <div className="col-12">
//                 <h2 className="font-weight-bold">Classroom</h2>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-5">
//               <h4>Bart Simpson</h4>
//               </div>
//               <div className="col-5">
//               <h4>homer@gmail.com</h4>
//               </div>
//               <div className=" col-2 d-flex justify-content-end">
//                 <Edit color="primary"/>
//                 <Delete color='secondary'/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-5">
//               <h4>Nelson Muntz</h4>
//               </div>
//               <div className="col-5">
//               <h4>nelson@gmail.com</h4>
//               </div>
//               <div className=" col-2 d-flex justify-content-end">
//                 <Edit color="primary"/>
//                 <Delete color='secondary'/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-5">
//               <h4>Lisa Simpson</h4>
//               </div>
//               <div className="col-5">
//               <h4>homer@gmail.com</h4>
//               </div>
//               <div className=" col-2 d-flex justify-content-end">
//                 <Edit color="primary"/>
//                 <Delete color='secondary'/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-5">
//               <h4>Martin Prince</h4>
//               </div>
//               <div className="col-5">
//               <h4>Prince@gmail.com</h4>
//               </div>
//               <div className=" col-2 d-flex justify-content-end">
//                 <Edit color="primary"/>
//                 <Delete color='secondary'/>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-5">
//               <h4>Ralph Wiggum</h4>
//               </div>
//               <div className="col-5">
//               <h4>wigout@gmail.com</h4>
//               </div>
//               <div className=" col-2 d-flex justify-content-end">
//                 <Edit color="primary"/>
//                 <Delete color='secondary'/>
//               </div>
//             </div>
            
           
//             </section>
//         </main>
//       </div>
//     </div>
//   );
// };

export default connect(mapStateToProps, { getCurrentProfile })(ManageStudents);
