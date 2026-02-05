// //Not done
// // eslint-disable-next-line import-x/no-named-as-default
// import figma from "@figma/code-connect";

// import { Modal } from "./Modal";
// import { ModalActions, ModalContent, ModalHeader } from "./ModalComponents";

// figma.connect(
//   "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=6586-47183&node-type=frame&m=dev",
//   {
//     props: {
//       modal: figma.children("_Modal"),
//     },
//     example: ({ modal }) => <>{modal}</>,
//   },
// );

// figma.connect(
//   Modal,
//   "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=21392-5955&node-type=symbol&m=dev",
//   {
//     props: {
//       headerTitle: figma.nestedProps("_ModalHeader", { text: figma.string("Title") }),
//       headerDescription: figma.nestedProps("_ModalHeader", { text: figma.string("Description") }),
//       content: figma.nestedProps("_ModalContent", { content: figma.instance("Content") }),
//       //headerLabelClose: figma.boolean("Is dismissable", { true: () => {}, false: undefined }),
//       footerActions: figma.children("_ModalActions"),
//       /*
//       footerLeft?: ModalActionsProps["left"];
//       footerActions?: ModalActionsProps["children"];
//       footerLabelClose?: ModalActionsProps["labelClose"];
//       */
//       /*
//      //TODO - Has help icon
//      */
//     },
//     example: ({ content, headerTitle, headerDescription, ...props }) => (
//       <Modal headerTitle={headerTitle.text} headerDescription={headerDescription.text} {...props}>
//         {content.content}
//       </Modal>
//     ),
//   },
// );

// figma.connect(
//   ModalHeader,
//   "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7621-77715&node-type=frame&m=dev",
//   {
//     props: {
//       title: figma.string("Title"),
//       description: figma.string("Description"),
//       preventClose: figma.boolean("Is dismissable", { true: false, false: true }),
//     },
//     example: ({ ...props }) => (
//       <ModalHeader labelClose="" {...props} onClickClose={() => {}}>
//         {<></>}
//       </ModalHeader>
//     ),
//   },
// );

// figma.connect(
//   ModalContent,
//   "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7621-77718&node-type=frame&m=dev",
//   {
//     props: {
//       content: figma.instance("Content"),
//     },
//     example: ({ content, ...props }) => <ModalContent>{content}</ModalContent>,
//   },
// );

// figma.connect(
//   ModalActions,
//   "https://www.figma.com/design/HmokLgpDo4ogI5l5hpNApf/Sprout-Core-Components?node-id=7622-76002&node-type=frame&m=dev",
//   {
//     props: {
//       checkbox: figma.boolean("Has checkbox", { true: figma.children("Checkbox"), false: undefined }),
//     },
//     example: ({ checkbox, ...props }) => <ModalActions left={<>{checkbox}</>} labelClose=""></ModalActions>,
//   },
// );
