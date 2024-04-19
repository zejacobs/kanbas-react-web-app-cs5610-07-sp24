import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Profile() {
  const [profile, setProfile] = useState({ username: "", password: "", firstName: "", lastName: "", dob: "", email: "", role: "USER" });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const save = async () => {
    await client.updateUser(profile);
  };

  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div className="w-25">
          <Link to="/Kanbas/Account/Admin/Users" className="btn btn-warning w-100 mb-2">
            Users
          </Link>{" "}
          <br />
          <input className="form-control mb-2" value={profile.username} onChange={(e) => setProfile({ ...profile, username: e.target.value })} />
          <input className="form-control mb-2" value={profile.password} onChange={(e) => setProfile({ ...profile, password: e.target.value })} />
          <input className="form-control mb-2" value={profile.firstName} onChange={(e) => setProfile({ ...profile, firstName: e.target.value })} />
          <input className="form-control mb-2" value={profile.lastName} onChange={(e) => setProfile({ ...profile, lastName: e.target.value })} />
          <input className="form-control mb-2" value={profile.dob} type="date" onChange={(e) => setProfile({ ...profile, dob: e.target.value })} />
          <input className="form-control mb-2" value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} />
          <select className="form-control mb-2" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>{" "}
          <button className="btn btn-primary w-100 mb-2" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger w-100 mb-2" onClick={signout}>
            Signout
          </button>
        </div>
      )}
    </div>
  );
}
