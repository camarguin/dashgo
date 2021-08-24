import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Lucas Gerhardt</Text>
        <Text color="gray.300" fontSize="small">
          lucasgcamargo@icloud.com
        </Text>
      </Box>
      <Avatar size="md" name="Lucas Gerhardt" src="https://github.com/camarguin.png" />
    </Flex>
  )
}
