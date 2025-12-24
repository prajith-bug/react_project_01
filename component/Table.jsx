import React from 'react'

const defaultData = [
    ['A1', 'B1', 'C1', 'D1', 'E1'],
    ['A2', 'B2', 'C2', 'D2', 'E2'],
    ['A3', 'B3', 'C3', 'D3', 'E3'],
    ['A4', 'B4', 'C4', 'D4', 'E4'],
]

export default function Table() {
    return (
        <div style={{ maxWidth: 700 }} className="p-4">
            <h2 style={{ marginBottom: 8 }}>Sample 4x5 Table</h2>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            {Array.from({ length: 5 }).map((_, i) => (
                                <th
                                    key={i}
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        background: '#f3f4f6',
                                        textAlign: 'left',
                                    }}
                                >
                                    Column {i + 1}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {defaultData.map((row, ri) => (
                            <tr key={ri}>
                                {row.map((cell, ci) => (
                                    <td
                                        key={ci}
                                        style={{ border: '1px solid #eee', padding: '8px' }}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}