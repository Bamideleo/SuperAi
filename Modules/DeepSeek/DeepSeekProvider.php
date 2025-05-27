<?php

namespace Modules\DeepSeek;

use App\Lib\AiProvider;
use Modules\DeepSeek\Traits\DeepSeekApiTrait;
use Modules\DeepSeek\Resources\TemplateDataProcessor;

// Contract Resources
use Modules\OpenAI\Contracts\Resources\CodeContract;
use Modules\OpenAI\Contracts\Resources\AiChatContract;
use Modules\OpenAI\Contracts\Resources\ChatbotContract;
use Modules\OpenAI\Contracts\Resources\AiDocChatContract;
use Modules\OpenAI\Contracts\Resources\LongArticleContract;
use Modules\OpenAI\Contracts\Resources\TemplateContentContract;

// Data Proccessors
use Modules\DeepSeek\Resources\CodeDataProcessor;
use Modules\DeepSeek\Resources\AiChatDataProcessor;
use Modules\DeepSeek\Resources\ChatbotDataProcessor;
use Modules\DeepSeek\Resources\AiDocChatDataProcessor;
use Modules\DeepSeek\Resources\LongArticleDataProcessor;

// Response Contract
use Modules\OpenAI\Contracts\Responses\Code\CodeResponseContract;
use Modules\OpenAI\Contracts\Responses\AiChat\AiChatResponseContract;
use Modules\OpenAI\Contracts\Responses\LongArticle\{
    OutlineResponseContract,
    TitleResponseContract
};


// Response
use Modules\DeepSeek\Responses\StreamResponse;
use Modules\DeepSeek\Responses\Chat\ChatResponse;
use Modules\DeepSeek\Responses\Code\CodeResponse;
use Modules\DeepSeek\Responses\AiChat\AiChatResponse;
use Modules\DeepSeek\Responses\AiDocChat\AskQuestionResponse;
use Modules\DeepSeek\Responses\LongArticle\{
    OutlineResponse,
    TitleResponse
};


class DeepSeekProvider extends AiProvider implements TemplateContentContract, CodeContract, AiChatContract, AiDocChatContract, ChatbotContract, LongArticleContract
{
    use DeepSeekApiTrait;

    /**
     * Holds the processed data after it has been manipulated or transformed.
     * This property is typically used within the context of a class to store
     * data that has been modified or processed in some way.
     *
     * @var array Contains an array of data resulting from processing operations.
     */
    protected $processedData;

    public function description(): array
    {
        return [
            'title' => 'DeepSeek',
            'description' => __('DeepSeek is an AI provider specializing in advanced natural language processing and deep learning models. It offers AI-powered solutions for text generation, understanding, and analysis, catering to applications such as chatbots, content creation, and research. DeepSeek focuses on high-performance models with competitive accuracy and efficiency, making it a strong alternative in the AI landscape.'),
            'image' => 'Modules/DeepSeek/Resources/assets/image/deepseek.png',
        ];
    }

    /**
     * Generates template options by calling the templateOptions method of the TemplateDataProcessor class.
     *
     * @return array The array of code options.
     */
    public function templatecontentOptions(): array
    {
        return (new TemplateDataProcessor)->templatecontentOptions();
    }

    /**
     * Generates a template using the provided AI options.
     *
     * This method processes the given AI options through the TemplateDataProcessor
     * to generate the necessary template data. After processing, it initiates 
     * a chat stream.
     *
     * @param array $aiOptions An associative array of AI options to be used for template generation.
     * @return mixed The result of the chat stream.
     */
    public function templateGenerate(array $aiOptions): ?StreamResponse
    {
        $this->processedData = (new TemplateDataProcessor($aiOptions))->template();
        return $this->chatStream();
    }

    /**
     * Processes the stream response to extract the template content.
     *
     *
     * @param mixed $streamResponse The stream response object containing choices.
     * @return string|null The extracted content from the stream response, or null if not available.
     */
    public function templateStreamData($streamResponse): string
    {
        if (isset($streamResponse['choices'][0]['delta']['content'])) {
            return $streamResponse['choices'][0]['delta']['content'];
        }
        return "";
    }

    /**
     * Generates code options by calling the codeOptions method of the CodeDataProcessor class.
     *
     * @return array The array of code options.
     */
    public function codeOptions(): array
    {
        return (new CodeDataProcessor)->codeOptions();
    }

    /**
     * Generates a CodeResponseContract object by processing the given $aiOptions using the CodeDataProcessor class.
     *
     * @param array $aiOptions The options for AI processing.
     *
     * @return CodeResponseContract The generated CodeResponseContract object.
     */
    public function code(array $aiOptions): CodeResponseContract
    {
        $this->processedData = (new CodeDataProcessor($aiOptions))->code();
        return new CodeResponse($this->chat());
    }

    /**
     * Retrieves the character chatbot options by instantiating a CharacterChatbotDataProcessor
     * and calling the characterChatbotOptions method.
     *
     * @return array An array of character chatbot options.
     */
    public function AiChatOptions(): array
    {
        return (new AiChatDataProcessor)->aiChatOptions();
    }

    /**
     * Generates a character chatbot chat using the provided AI options.
     *
     * @param array $aiOptions Options for AI processing.
     * @return AiChatResponse Response containing the chatbot chat.
     */
    public function aiChat(array $aiOptions): AiChatResponseContract
    {
        $this->processedData = (new AiChatDataProcessor($aiOptions))->aiChatDataOptions();
        return new AiChatResponse($this->chat());
    }

    /**   
     * Retrieves AI Doc Chat options.
     *
     * @return array Options for AI Doc Chat processing.
     */
    public function aiDocChatOptions(): array
    {
        return (new AiDocChatDataProcessor)->aiDocChatOptions();
    }

    /**
     * Method to ask a question using the provided AI options.
     *
     * @param array $aiOptions Options for AI processing.
     * @return AskQuestionResponse Response containing the asked question.
     */
    public function askQuestion(array $aiOptions): AskQuestionResponse
    {
        $this->processedData = (new AiDocChatDataProcessor($aiOptions))->askQuestionOptions();
        return new AskQuestionResponse($this->chat());
    }

    /**
     * Retrieves the chatbot options by instantiating a ChatbotDataProcessor
     * and calling the chatbotOptions method.
     *
     * @return array An array of chatbot options.
     */
    public function chatbotOptions(): array
    {
        return (new ChatbotDataProcessor())->chatbotOptions();
    }

    /**
     * Ask a question to the content based on the provided AI options.
     *
     * This method uses the ChatbotDataProcessor to process the AI options and ask a question to the content,
     * assigns the result to the processedData property, and returns a ChatResponse instance.
     *
     * @param array $aiOptions The AI options for asking a question to the content.
     * @return ChatResponse The chat response after processing the question.
     */
    public function askQuestionToContent(array $aiOptions): ChatResponse
    {
        $this->processedData = (new ChatbotDataProcessor($aiOptions))->askQuestionDataOptions();
        return new ChatResponse($this->chat());
    }

    public function longArticleOptions(): array
    {
        return (new LongArticleDataProcessor)->longarticleOptions();
    }

    /**
     * Generates titles using AI options.
     *
     * @param array $aiOptions Options for AI processing.
     * @return TitleResponseContract Response containing generated titles.
     */
    public function titles(array $aiOptions): TitleResponseContract
    {
        $this->processedData = (new LongArticleDataProcessor($aiOptions))->titleOptions();
        return new TitleResponse($this->chat());
    }

    /**
     * Generates outlines using AI options.
     *
     * @param array $aiOptions Options for AI processing.
     * @return OutlineResponseContract Response containing generated titles.
     */
    public function outlines(array $aiOptions): OutlineResponseContract
    {
        $this->processedData = (new LongArticleDataProcessor($aiOptions))->outlineOptions();
        return new OutlineResponse($this->outlineChat( $aiOptions['number_of_outlines'] ?? 1));
    }

    public function fakeTitles(array $aiOptions): TitleResponseContract
    {
        $fakeResponse = json_decode('{"response":{"id":"msg_017fk76mgw1fnTEbT5J6KGoJ","type":"message","role":"assistant","content":[{"type":"text","text":"[\"Unveiling the Benefits: How AI Technology is Shaping Our Future\"]"}],"model":"claude-3-opus-20240229","stop_reason":"end_turn","stop_sequence":null,"usage":{"input_tokens":66,"output_tokens":20}}}', true);
        return new TitleResponse( $fakeResponse['response']);
    }

    public function fakeOutlines(array $aiOptions): OutlineResponseContract
    {
        $fakeResponse = json_decode('{"response":{"id":"msg_01DUcMikFXqTdc1fxWS2gabN","type":"message","role":"assistant","content":[{"type":"text","text":"[\n\"Unleashing AI Superpowers: Exploring the Future of AI Technology\",\n\"Unlocking the Potential: AI Integration Services for the Future of AI\",\n\"Intelligent Automation and Machine Learning on Demand: Powering the Future of AI\",\n\"The Future of AI: OpenAI Envisions On-Demand AI Superpowers\"\n]"}],"model":"claude-3-opus-20240229","stop_reason":"end_turn","stop_sequence":null,"usage":{"input_tokens":98,"output_tokens":133}}}', true);
        return new OutlineResponse($fakeResponse['response']);
    }
  
    public function article(array $aiOptions)
    {
        $this->processedData = (new LongArticleDataProcessor($aiOptions))->articleOptions();
        return $this->chatStream();
    }

    public function streamData(array|object $streamResponse): string
    {
        if (isset($streamResponse['choices'][0]['delta']['content'])) {
            return $streamResponse['choices'][0]['delta']['content'];
        }
        return "";
    }

    /**
     * Get the validation rules for a specific processor.
     * 
     * @param string $processor The name of the data processor class.
     * 
     * @return array Validation rules for the processor.
     */
    public function getValidationRules(string $processor): array
    {
        $processorClass = "Modules\\DeepSeek\\Resources\\" . $processor;

        if (class_exists($processorClass)) {
            return (new $processorClass())->validationRules();
        }

        return [];
    }
}
