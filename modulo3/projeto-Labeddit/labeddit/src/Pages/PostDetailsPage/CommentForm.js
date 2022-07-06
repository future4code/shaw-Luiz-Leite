import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useForm } from "../../Hooks/UseForm";
import { createComment } from "../../services/post";
import { BodyInput, CommentFormContainer } from "./Styled";

function CommentForm(props) {

    const [isLoading, setIsLoading] = useState(false)
    const { form, onChange, cleanFields } = useForm({
        body: ""
    })

    const onSubmitPost = (event) => {
        event.preventDefault()
        createComment(props.id, form, cleanFields, props.getComments, setIsLoading)
    }

    return (
        <CommentFormContainer onSubmit={onSubmitPost}>
            <BodyInput
                placeholder="Adicionar comentário"
                name="body"
                value={form.body}
                onChange={onChange}
                type={"text"}
                required
            />
            <button>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : <>Responder</>}
            </button>
        </CommentFormContainer>
    );
}

export default CommentForm;