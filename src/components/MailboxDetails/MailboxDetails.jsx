import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((box) => box._id === Number(mailboxId));

  if (!mailbox) {
    return <p>Mailbox Not Found!</p>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>ID: {mailbox._id}</p>
      <p>Owner: {mailbox.boxOwner}</p>
      <p>Size: {mailbox.boxSize}</p>
    </div>
  );
};

export default MailboxDetails;
