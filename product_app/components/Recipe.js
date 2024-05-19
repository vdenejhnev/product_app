import { useState, useRef } from 'react';
import { FlatList, StyleSheet, ScrollView, View, Text, Image, Pressable} from 'react-native';

export default function Recipe({ route }) {
    return (
        <ScrollView style={styles.recipe_container}>
            <Image 
                style={styles.recipe_image}
                source={{
                    uri: route.params.data.image,
                }}
            />
            <Text style={styles.recipe_title}>{route.params.data.title}</Text>
            <View style={styles.recipe_products}>
                <Text style={styles.recipe_products_head}>Ингредиенты</Text>
                {route.params.data.products.map((item) =>
                    <View style={styles.recipe_product}>
                        <Text style={styles.recipe_product_title}>{item.title}</Text>
                        {item.in_stock && (
                            <Text>в наличии</Text>
                        )}
                        {item.weight > 0 && (
                            <Text style={styles.recipe_product_weight}>{item.weight} {item.measure}</Text>
                        )}
                    </View>
                )}
            </View>
            <View style={styles.recipe_instruction}>
                <Text style={styles.recipe_instruction_head}>Приготовление</Text>
                <Text style={styles.recipe_instruction_text}>{route.params.data.instruction}</Text>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    recipe_container: {
        paddingTop: 24,
        paddingHorizontal: 18,
        backgroundColor: '#FFFFFF',
    },
    recipe_image: {
        width: '100%',
        height: 280,
        objectFit: 'contain'
    },
    recipe_title: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 28
    },
    recipe_products: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FCBA26',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '100%',
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderRadius: 8
    },
    recipe_products_head: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '500',
        color: '#151515',
    },
    recipe_product: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '100%',
        fontSize: 16,
        paddingVertical: 4,
    },
    recipe_product_title: {
        fontSize: 16,
        color: '#151515',  
    },
    recipe_product_weight: {
        fontSize: 16,
        fontWeight: '500',
        color: '#151515',
    },
    recipe_instruction: {
        width: '100%',
        maxWidth: '100%',
        marginTop: 24,
        marginBottom: 120,
        paddingVertical: 16,
        paddingHorizontal: 12,
        borderColor: '#6DE5B5',
        borderWidth: 2,
        borderRadius: 18,
        borderRadius: 8
    },
    recipe_instruction_head: {
        marginBottom: 18,
        fontSize: 20,
        fontWeight: '500',
        color: '#151515',
    },
    recipe_instruction_text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#151515',
    }
})