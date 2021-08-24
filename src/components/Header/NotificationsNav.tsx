import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'


const NotificationsNav = () => {
  return (
    <HStack spacing="8" mx="8" borderRightWidth={1} borderColor="gray.700" pr="8" py="1" color="gray.300">
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
  );
};

export default NotificationsNav;