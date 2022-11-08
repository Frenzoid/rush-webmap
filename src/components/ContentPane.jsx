import React from 'react';
import { 
  Box,
  Flex,
  Heading,
  IconButton,
  ListItem,
  OrderedList,
  Spacer,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function ContentPane({openFlag, setOpenFlag, question, ...props}) {
  return (
    <VStack
      divider={<StackDivider borderWidth='2px' borderColor='rush.700' />}
      spacing={4}
      p={4}
      bg='rush.100'
      {...props}
    >
      <Flex direction='row' w='100%'>
        <Spacer />
        <Heading>{question.title}</Heading>
        <Spacer />
        <IconButton
          icon={openFlag ? <FaChevronDown /> : <FaChevronUp />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <Flex
          h='100%'
          gap='20px'
          overflow='hidden'
        >
          <TextPane flex='1' overflowY='auto' paragraphList={question.story}/>
          <ListPane flex='1' overflowY='auto' itemList={question.tips}/>
        </Flex>
      ) : null}
    </VStack>
  )
}

function TextPane({paragraphList, ...props}) {
  return (
    <Box {...props} pe={2}>
        <Heading mb={1}>
          Story
        </Heading>
        {paragraphList.map(p =>
          <Text key={p} mb="2em">{p}</Text>
        )}
      </Box>
  )
}

function ListPane({itemList, ...props}) {
  return (
    <Box {...props} px={2}>
      <Heading mb={1}>
        Tips
      </Heading>
      <OrderedList>
        {itemList.map(item =>
          <ListItem key={item}>{item}</ListItem>
        )}
      </OrderedList>
    </Box>
  )
}