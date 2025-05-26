<?php

namespace src;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/Analyzis.php';

use NeuronAI\Agent;
use NeuronAI\MCP\McpConnector;
use NeuronAI\Providers\AIProviderInterface;
use NeuronAI\Providers\Mistral;
use NeuronAI\SystemPrompt;

class InstagramAnalyzer extends Agent
{
    public function provider(): AIProviderInterface
    {
        return new Mistral(
            key: $_ENV['MISTRAL_API_TOKEN'],
            model: $_ENV['MISTRAL_API_MODEL'],
        );
    }

    public function instructions(): string
    {
        return new SystemPrompt(
            background: [
                'Analyse instagram profile'
            ],
            steps: [
                'You do the analyse of profile giving insights to the puser about it',
            ],
            output: [
                'Return your output as a populated instance of the provided PHP class.',
            ]
        );
    }

    protected function tools(): array
    {
        return [
            ...McpConnector::make(
                [
                    'command' => 'npx',
                    'args' => ['@brightdata/mcp'],
                    'env' => [
                        "API_TOKEN" => $_ENV['BRIGHT_API_TOKEN'],
                        "WEB_UNLOCKER_ZONE" => $_ENV['BRIGHT_WEB_UNLOCKER_ZONE'],
                        "BROWSER_AUTH" => $_ENV['BRIGHT_BROWSER_AUTH']
                    ],
                ],
            )->tools(),
        ];
    }

    protected function getOutputClass(): string
    {
        return Analyzis::class;
    }
}
