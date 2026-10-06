function ProfileCard({
  name,
  image,
  description
}) {

  return (
    <div className="profile-card">

      <img
        src={image}
        alt={name}
        className="profile-image"
      />

      <div className="profile-info">

        <p className="card-label">
          REACT PROFILE CARD
        </p>

        <h3>{name}</h3>

        <p>
          {description}
        </p>

      </div>

    </div>
  );
}


function ProfileCardPage() {

  return (
    <div className="content">

      <div className="aim-box">

        <h3>Aim</h3>

        <p>
          Create a React profile card and use
          props to pass the name, image URL and
          short description.
        </p>

      </div>

      <ProfileCard

        name="Anushka"

        image="https://i.pravatar.cc/400?img=12"

        description="I am a student interested in web development, JavaScript and React."
      />

      <div className="props-note">

        <strong>
          Props used:
        </strong>

        <code>name</code>,
        <code>image</code>,
        <code>description</code>

      </div>

    </div>
  );
}

export default ProfileCardPage;