import React from "react";

const Card = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <>
      <div className="user">
        <div>
          <img src={avatar_url} alt={name || login} className="avatar" />
        </div>
        <div>
          <a href={`https://github.com/${login}`}>{name || login}</a>
          <p>
            User joined on{" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </p>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-start", gap: "15px" }}
        >
          <div>
            <p>Public Repos</p>
            <p>{public_repos}</p>
          </div>
          <div>
            <p>Followers</p>
            <p>{followers}</p>
          </div>
          <div>
            <p>Following</p>
            <p>{following}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
