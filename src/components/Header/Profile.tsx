import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Gerhardt</Text>
          <Text color="gray.300" fontSize="small">
            lucasgcamargo@icloud.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Lucas Gerhardt" src="https://github.com/camarguin.png" />
    </Flex>
  )
}
