import {
  PermIdentityOutlined as ContactsIcon,
  PhoneCallbackOutlined as RecentCallsIcon,
  VoicemailOutlined as VoicemailsIcon,
  ChatBubbleOutlineOutlined as ConversationsIcon,
  SettingsOutlined as SettingsIcon,
} from "@mui/icons-material";

export const menuItems = [
  {
    path: "/contacts",
    title: "Contacts",
    icon: <ContactsIcon className="!text-[--purple-400]" />,
  },
  {
    path: "/call-logs",
    title: "Recent Calls",
    icon: <RecentCallsIcon className="!text-[--purple-400]" />,
  },
  {
    path: "/voice-mail",
    title: "Voicemails",
    icon: <VoicemailsIcon className="!text-[--purple-400]" />,
  },
  {
    path: "/conversation",
    title: "Conversations",
    icon: <ConversationsIcon className="!text-[--purple-400]" />,
  },
  {
    path: "/setting",
    title: "Settings",
    icon: <SettingsIcon className="!text-[--purple-400]" />,
  },
];
