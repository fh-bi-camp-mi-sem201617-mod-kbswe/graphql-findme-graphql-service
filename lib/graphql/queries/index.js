import profile from "./profile";
import user from "./user";
import message from "./message";
import preference from "./preference";

export default {
    ...profile,
    ...user,
    ...message,
    ...preference
};
