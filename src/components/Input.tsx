import {Input as NativeBaseInput, IInputProps} from 'native-base'

export function Input({...rest}: IInputProps) {
  return(
    <NativeBaseInput
      bg="teal.800"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.100"
      _focus={{
        bg: "teal.800",
        borderWidth: 1,
        borderColor: "teal.300"
      }}
      {...rest}
    />

  )
}