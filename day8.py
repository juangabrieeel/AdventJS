def drawRace(indices, length):
    # Crear la lista que representará cada carril
    race = []
    
    for i, pos in enumerate(indices):
        # Si la posición es positiva, la posición del reno será pos
        # Si la posición es negativa, la posición será desde el final: length + pos
        if pos >= 0:
            track = ['~'] * length
            track[pos] = 'r'
        else:
            track = ['~'] * length
            track[length + pos] = 'r'
        
        # Convertir la lista de caracteres en un string y agregarla a la carrera
        race.append(''.join(track) + f' /{i+1}')
    
    # Devolver la representación en formato isométrico con los carriles desplazados
    return '\n'.join(race[::-1])

# Ejemplos de prueba
print(drawRace([0, 5, -3], 10))
print(drawRace([2, -1, 0, 5], 8))
print(drawRace([3, 7, -2], 12))