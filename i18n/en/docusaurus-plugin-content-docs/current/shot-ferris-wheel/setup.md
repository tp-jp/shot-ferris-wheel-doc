---
sidebar_position: 2
title: Setup Guide
description: Detailed installation and configuration instructions for Tequila Ferris Wheel
---

# Setup Guide

This page explains the detailed setup process for "Tequila Ferris Wheel - ShotFerrisWheel -".

## System Requirements

- Unity 2022.3.22f1
- VRChat SDK - Base 3.10.4 or later
- VRChat SDK - World 3.10.4 or later

## Required Assets

The following assets are required to use this product:

### Filamented Standard for Unity

**Author**: s-ilent  
**URL**: https://s-ilent.booth.pm/items/3250389

:::warning Important
If this asset is not imported, materials may not display correctly. Please import this asset first before importing this product.
:::

## Installation Steps

### 1. Import the Unitypackage

Import the `unitypackage` included in the extracted zip file into Unity.

### 2. Place the Prefabs

#### Steps

1. Open the `Assets/TpLab/ShotFerrisWheel/Prefabs` folder in the **Project window**
2. Select the **Prefab** you want to use
3. Drag and drop it into the **Hierarchy** to place it

:::tip For Beginners

**Bottle** and **Glass** are optional items.  
Place and use them individually only when needed.
:::

#### Available Prefabs

| Category      | Prefab Name         | Description           | Notes                              |
| ------------- | ------------------- | --------------------- | ---------------------------------- |
| 📦 **Main**   | ShotFerrisWheel     | Tequila Ferris Wheel  | Main Tequila Ferris Wheel object   |
| 🍾 **Bottle** | Bottle/TequilaBottle| Tequila bottle        | Use together with the shot glass   |
| 🥃 **Glass**  | Glass/ShotGlass     | Shot glass            | Can be filled from Tequila bottle  |

### 3. Game Settings

Configure settings in the Inspector at `TequilaFerrisWheel/Game/GameSettings`.

| Setting Item         | Description               | Value              | Effect                                             |
| -------------------- | ------------------------- | ------------------ | -------------------------------------------------- |
| **Max Hit Count**    | Maximum number of hits    | Number (e.g., 3)   | Maximum number of hits configurable in game settings |
| **Default Hit Count**| Initial value of hit count| Number (e.g., 1.0) | Initial hit count value in game settings          |

## How to Use

### Basic Operation Steps

#### 🍾 Pour from bottle to glass

1. **Pick up the bottle** - Grab the bottle in VR
2. **Press the Use button** to remove the cap
3. **Tilt it over the glass** to pour liquid

#### 🥃 Drink from the glass

1. **Pick up the glass** - Grab the glass in VR
2. **Tilt the glass** and the contents sway
3. **Tilt further** and the contents decrease

### Enhancing Visual Effects

To make bottles and glasses look beautifully glossy, we recommend placing **ReflectionProbe** in your world.

:::tip Reference Site
Create an "Attractive" World by Placing Reflection Probes  
https://creator.cluster.mu/2022/03/22/misaka-1/
:::

### Support

If you encounter issues with setup or usage, please check the [Support & Contact](./support) page.

:::info FAQ and More
Detailed information including FAQ, update procedures, and troubleshooting is available on the [Support page](./support).
:::
