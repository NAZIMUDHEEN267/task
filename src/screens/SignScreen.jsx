import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView
} from 'react-native'
import React, { useState } from 'react'

const SignScreen = () => {
    const [username, setUsername] = useState("");
    const [passwd, setPasswd] = useState("");

    const inputStyle = "w-full rounded-full h-16 bg-gray-200 mb-3 px-5";

    return (
        <KeyboardAvoidingView behavior='height' className="mt-5 p-3 flex-1">
            {/* navbar */}
            <View className="w-full">
                <TouchableOpacity activeOpacity={.7}>
                    <Text className="text-right font-semibold tracking-wide">Skip</Text>
                </TouchableOpacity>
            </View>

            {/* Main body */}
            <View className="items-center justify-center flex-1 px-3">
                <Text className="font-semibold text-4xl text-black">Sign In</Text>
                <Text className="mt-3 text-gray-400 mb-3">Enter Your Details</Text>
                <TextInput className={inputStyle} onChangeText={setUsername} value={username} />
                <TextInput
                    className={inputStyle}
                    onChangeText={setPasswd}
                    value={passwd}
                    secureTextEntry={true}
                />
                <TouchableOpacity className={`${inputStyle} bg-blue-400 items-center justify-center`}>
                    <Text className="font-semibold tracking-wide text-l text-gray-200">Sign in</Text>
                </TouchableOpacity>

                <Text className="text-gray-500 mb-2">Forgot your password?</Text>

                <View className="flex-row">
                    <Text className="text-gray-400">Don't have an account? </Text>
                    <TouchableOpacity>
                        <Text className="text-blue-400 font-normal text-l">Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignScreen;