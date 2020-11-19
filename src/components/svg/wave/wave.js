import { computeControlPoints } from './bezier-spline'
const svgns = 'http://www.w3.org/2000/svg'

// layercount is default to 2. Increasing the number would stack up n-1 waves.
function generatePoints(width, height, segmentCount, layerCount, variance) {
    const cellWidth = width / segmentCount
    const cellHeight = height / layerCount
    const moveLimitX = cellWidth * variance * 0.5
    const moveLimitY = cellHeight * variance

    const points = []
    for (let y = cellHeight; y < height; y += cellHeight) {
        let pointsPerLayer = []
        pointsPerLayer.push({ x: 0, y: Math.floor(y) })
        for (let x = cellWidth; x < width; x += cellWidth) {
            //@anup: this decides whether a segment is crest or trough
            const varietalY = y - moveLimitY / 1 + Math.random() * moveLimitY
            const varietalX = x - moveLimitX / 1 + Math.random() * moveLimitX
            pointsPerLayer.push({
                x: Math.ceil(varietalX),
                y: Math.ceil(varietalY)
            })
        }
        pointsPerLayer.push({ x: width, y: Math.floor(y) })
        points.push(pointsPerLayer)
    }
    return points
}

function generateClosedPath(
    curvePoints,
    leftCornerPoint,
    rightCornerPoint,
    fillColour,
    strokeColour,
    strokeWidth,
    type
) {
    const xPoints = curvePoints.map((p) => p.x)
    const yPoints = curvePoints.map((p) => p.y)

    const xControlPoints = computeControlPoints(xPoints)
    const yControlPoints = computeControlPoints(yPoints)

    let path = `M ${leftCornerPoint.x},${leftCornerPoint.y} ` + `V ${xPoints[0]},${yPoints[0]} `

    for (let i = 0; i < xPoints.length - 1; i++) {
        switch (type) {
            case 'sharp':
                path += `L ${xPoints[i + 1]},${yPoints[i + 1]} `
                break
            case 'linear':
                path += `V ${yPoints[i + 1]} H ${xPoints[i + 1]} `
                break
            default:
                path +=
                    `C ${xControlPoints.p1[i]},${yControlPoints.p1[i]} ` +
                    `${xControlPoints.p2[i]},${yControlPoints.p2[i]} ` +
                    `${xPoints[i + 1]},${yPoints[i + 1]} `
        }
    }

    path +=
        `C ${xPoints[xPoints.length - 1]},${yPoints[xPoints.length - 1]} ` +
        `${rightCornerPoint.x},${rightCornerPoint.y} ` +
        `${rightCornerPoint.x},${rightCornerPoint.y} Z`

    return {
        fill: fillColour,
        strokeColour: strokeColour,
        strokeWidth: strokeWidth,
        d: path
    }
}

export class Wavery {
    constructor(properties) {
        this.properties = { ...properties }
        this.points = generatePoints(
            this.properties.width,
            this.properties.height,
            this.properties.segmentCount,
            this.properties.layerCount,
            this.properties.variance
        )
    }

    generateSvg() {
        const pathList = []

        // Append layer of a wave
        for (let i = 0; i < this.points.length; i++) {
            pathList.push(
                generateClosedPath(
                    this.points[i],
                    { x: 0, y: this.properties.height },
                    { x: this.properties.width, y: this.properties.height },
                    this.properties.fillColour,
                    this.properties.strokeColour,
                    this.properties.strokeWidth,
                    this.properties.type
                )
            )
        }

        const svgData = {
            svg: {
                width: this.properties.width,
                height: this.properties.height,
                xmlns: svgns,
                path: pathList
            }
        }

        return svgData
    }
}
