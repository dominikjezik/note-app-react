import React from 'react'

const COLORS = [
    "yellow",
    "red",
    "green",
    "blue",
    "purple"
]

function Categories({ selectedCategory, onSelect }) {

    const selectCategory = (color) => {
        if(color === selectedCategory) {
            onSelect("")
        } else {
            onSelect(color)
        }
    }

    return (
        <div className="categories">
            { COLORS.map(color => (
                <div 
                    key={color}
                    onClick={() => selectCategory(color) } 
                    className={
                        `category category-${color} ${ selectedCategory === color ? "category-selected" : ""}`
                    }
                />
            )) }
        </div>
    )
}

export default Categories
