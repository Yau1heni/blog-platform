import { StateSchema } from 'app/providers/store-provider';

export const selectCommentFormText = (state: StateSchema) => state?.addCommentForm?.text ?? '';
export const selectCommentFormError = (state: StateSchema) => state?.addCommentForm?.text;
