import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.length === 0 ? <p>No mailboxes available.</p> : (
        <div>
          {mailboxes.map(mailbox => (
            <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
              <div className="mail-box">{mailbox._id}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MailboxList;
