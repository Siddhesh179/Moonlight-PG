import React from 'react'
import { View, Text,Image,ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const Signin = () => {

  const handlelogin = () => {
    console.log('login')
  };
  return (
          <SafeAreaView className='bg-white h-full'>
             <ScrollView contentContainerClassName='h-full '>
               <Image source={images.onboarding} className='w-full h-4/6' resizeMode="contain" />
               <View className='px-10'>
                  <Text className='text-base text-center uppercase font-rubik text-black-200 mt-1'>Welcome to Moonlight</Text>
                   <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                    Where Every Room {"\n"} 
                    <Text className='text-primary-300'>Feels Like Home</Text>
                  </Text>

                  <Text className='text-lg font-rubik-medium text-black-200 text-center mt-12'>
                    Login to Moonlight with Google
                  </Text>

                  <TouchableOpacity onPress={handlelogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                    <View className='flex flex-row justify-center items-center'>
                    <Image source={icons.google} className='w-5 h-5' resizeMode='contain'/>
                    <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>

                    </View>

                  </TouchableOpacity>
               </View>
             </ScrollView>
         </SafeAreaView>
  )
}

export default Signin; 