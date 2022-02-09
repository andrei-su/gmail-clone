import React from "react";
// React Hook Form
import { useForm } from "react-hook-form";
// React Redux
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../features/mailSlice";
// Firebase
import * as fb from "../../firebase";
// Components
import { Button } from "@material-ui/core";
// Icons
import { Close } from "@material-ui/icons";
// Styles
import "./SendMail.css";

function SendMail() {
	const { register, handleSubmit, watch, errors } = useForm();
	const dispatch = useDispatch();

	const onSubmit = (formData) => {
		console.log(formData);
		fb.addDoc(fb.collection(fb.db, "emails"), {
			to: formData.to,
			subject: formData.subject,
			message: formData.message,
			timestamp: fb.serverTimestamp(),
		});
		dispatch(closeSendMessage());
	};

	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h3>New Message</h3>
				<Close 
					onClick={() => dispatch(closeSendMessage())} 
					className="sendMail__close"
				/>
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="to"
					placeholder="To"
					type="email"
					ref={register({ required: true })}
				/>
				{errors.to && <p className="sendMail__error">To is Required!</p>}
				<input
					name="subject"
					placeholder="Subject"
					type="text"
					ref={register({ required: true })}
				/>
				{errors.subject && (
					<p className="sendMail__error">Subject is Required!</p>
				)}
				<input
					name="message"
					placeholder="Message..."
					type="text"
					className="sendMail__message"
					ref={register({ required: true })}
				/>
				{errors.message && (
					<p className="sendMail__error">Message is Required!</p>
				)}
				<div className="sendMail__options">
					<Button
						className="sendMail__send"
						variant="contained"
						color="primary"
						type="submit"
					>
						Send
					</Button>
				</div>
			</form>
		</div>
	);
}

export default SendMail;
