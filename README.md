"# TestApi - Weather Forecast API

A simple ASP.NET Core Web API project that provides weather forecast data.

## Technology Stack

- .NET 8.0
- ASP.NET Core Web API
- C# with nullable reference types enabled
- Implicit usings enabled

## Features

- RESTful API for weather forecasts
- Returns 5-day weather forecast with random data
- Temperature provided in both Celsius and Fahrenheit
- Includes weather summaries (Freezing, Bracing, Chilly, Cool, Mild, Warm, Balmy, Hot, Sweltering, Scorching)

## Getting Started

### Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later

### Running the Application

1. Clone the repository
2. Navigate to the project directory
3. Restore dependencies:
   ```bash
   dotnet restore
   ```
4. Build the project:
   ```bash
   dotnet build
   ```
5. Run the application:
   ```bash
   dotnet run
   ```

The API will be available at `http://localhost:7001`

## API Endpoints

### GET /WeatherForecast

Returns a 5-day weather forecast with random temperature data.

**Response Example:**
```json
[
  {
    "date": "2024-01-15T00:00:00",
    "temperatureC": 25,
    "temperatureF": 77,
    "summary": "Warm"
  },
  {
    "date": "2024-01-16T00:00:00",
    "temperatureC": -5,
    "temperatureF": 23,
    "summary": "Freezing"
  }
]
```

## Project Structure

- `Program.cs` - Application entry point and configuration
- `WeatherForecast.cs` - Weather forecast data model
- `Controllers/WeatherForecastController.cs` - API controller with weather forecast endpoint
- `TestApi.csproj` - Project configuration file" 
